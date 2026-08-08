import { useState } from 'react'
import {InputBox} from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const currenyInfo = useCurrencyInfo(from)
  const currenyInfoTO = useCurrencyInfo(to)
  const optionsTO = Object.keys(currenyInfoTO)
  const options = Object.keys(currenyInfo)
  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    
  }
  const convert = () =>{
      setConvertedAmount(amount*currenyInfo[to])
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4025825/pexels-photo-4025825.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(currency)=> {
                                  setFrom(currency)
                                  setAmount(amount)
                                }}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                selectCurrency={to}
                                currencyOptions={optionsTO}
                                onCurrencyChange={(currency)=> {
                                  setTo(currency)
                                  setConvertedAmount(convertedAmount)
                                }}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
