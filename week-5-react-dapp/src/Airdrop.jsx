import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"

export function Airdrop() {

    const wallet = useWallet()
    const { connection } = useConnection()
    const [ amount , setAmount ] = useState(0)

    async function sendAirdropToUser() {
        console.log("wallet public key is ", wallet.publicKey.toString())
        await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
        alert("Airdrop sent to user")
    }

    return(
        <div>
            <input 
            type="text" 
            placeholder="Amount" 
            onChange={(e) => setAmount(e.target.value)}    
            />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}