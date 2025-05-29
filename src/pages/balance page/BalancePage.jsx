import { useRef, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";

export default function BalancePage() {
    const [balance,setBalance] = useState(0);
    const [balanceState, setBalanceState] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyState, setHistoryState] = useState(false);
    const transaction = useRef();
    //logic
    const handleBalanceState = ()=>{
        setBalanceState(true);
        setTimeout(() => {
            setBalanceState(false); 
        }, 8000);
    }
    const handleDeposit = ()=>{
        const transactionValue = +transaction.current.value;
        let depositObj = {bBalance : balance , amount : transactionValue , type : "Deposit" , aBalance : balance + transactionValue};
        let historyN = [...history];
        setBalance(balance + transactionValue);
        historyN.push(depositObj);
        setHistory(historyN);
        transaction.current.value = "";
        toast.success('transaction success!');
    }
    const handleWithdrawal = ()=>{
        const transactionValue = +transaction.current.value;
        if(balance >= transactionValue){
            setBalance(balance - transactionValue);
            let withdrawObj = {bBalance : balance , amount : transactionValue , type : "Withdrawal" , aBalance : balance - transactionValue};
            let historyN = [...history];
            historyN.push(withdrawObj);
            setHistory(historyN);
            transaction.current.value = "";
            toast.success("transaction success!");
        }else{
            toast.error("insufficient balance!!");
            transaction.current.value = "";
        }
    }

    return (
        <div className="col-12 d-flex flex-column gap-5 justify-content-center align-items-center">
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            <div className="col-6 d-flex flex-column gap-5 justify-content-center align-items-center">
                <h2>Your account Balance is : {balanceState ? balance : <FaEyeSlash onClick={handleBalanceState}/> }</h2>
                <input type="text" placeholder="Enter amount" className="form-control " ref={transaction}/>
                <div className="btns d-flex col-6 justify-content-between align-items-center">
                    <button className="btn btn-success" onClick={handleDeposit}>Deposit</button>
                    <button className="btn btn-warning" onClick={handleWithdrawal}>Withdraw</button>
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>{setHistoryState(!historyState)}}>Transaction History</button>
            {
                historyState ?             <div className="col-10">
                <table className="col-10 col-md-6 table table-dark table-hover animate__animated animate__bounceInUp">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Before Balance</th>
                            <th>Amount</th>
                            <th>Transaction Type</th>
                            <th>After Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((el,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{el.bBalance}</td>
                                        <td>{el.amount}</td>
                                        <td>{el.type}</td>
                                        <td>{el.aBalance}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> : null
            }
        </div>
    )
}
