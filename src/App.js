import React from 'react';
import "./App.css";


function App() {
    return (
        <>
                 <div className="main">
                    <img className="logo_img" src="logo.png" />
                    
                    <div className="text_imag">
                    <div className="decentrlized">
                        <h3>BEST DECENTRALIZED</h3>
                        <h2>COMMUNITY SUPPORT FUND ON TRON BLOCKCHAIN</h2>
                        <h2>100%<span className="verifie"> VERIFIED SMART CONTACT</span></h2>
                        <h2><span>18.28%</span>Daily ROI</h2>
                        <h2>128%<span className=""> IN 7 DA1YS</span></h2>
                        <button className="tele_grm">TELEGRAM</button>
                        <button className="smrtcntr">SMART CONTRACT</button>
                        </div>

                    
                    <img className="imag_second" src="money.png" width="1200" />
                </div>
                </div>
                
             
            
                <div className="global">
                    <h1>Global Stats</h1>
                </div>
                <div className="three_div">

                    <div className="total_trx">
                        <div className="inner_trx">
                            <h1>0</h1>
                            <h2>Total Invested TRX</h2>
                        </div>
                    </div>
                    <div className="total_invested">

                        <div className="inner_investor">
                            <h1>0</h1>
                            <h2>Total Investors</h2>
                        </div>
                    </div>
                    <div className="total_dividen">
                        <div className="inner_divide">
                            <h1>0</h1>
                            <h2>Total Dividends</h2>
                        </div>
                    </div>
                </div>
                <div className="center_towdiv">
                <div className="forth_div">
                <div className="daily_return">
                
            <h1>18.28% Daily Returns</h1>
            <p>128% In 7 Days</p>
            <p>Updates Every Seconds</p>
            <p>Wallet Balance: TRX</p>
            </div>
            <div className="trx-put">
            <input type="text"></input>
            <h2>TRX</h2>
            </div>
            <div className="forth-button">
                <button>invest</button>
                </div>
                <div className="transaction">
                <h3>1-3 TRX transaction fee will be applied</h3>
                </div>
            </div>    
            
            <div className="fifth_div">
                <div className="daily_divi">
                
            <h1>Your Dividends</h1>
            <p>Total Investments: 0 TRX</p>
            <p>Available to withdraw( TRX )</p>
            <h5>Including Ref Rewards</h5>
            <div className="fifth-button">
                <button>withdraw</button>
                </div>
                <div className="transaction">
                <h3>1-3 TRX transaction fee will be applied</h3>
                </div>
            </div>    
            </div>
            </div>
            <div className="last_img">
            <div className="six_div">
                <div className="daily_invst">
            <h1>My Investments</h1>           
            <p>My total investment 0 TRX</p>
            <p>Total Payouts so far TRX</p>
             
            </div>
        
            </div>
             <div className="inves_nm">
            <img src="investment.png" height="550px"/>
            </div> 
            </div>

            <div className="account_select">
            <h4>Account Selected:</h4>
           <h3> Minimum investment of 50 TRX to Activate referral link</h3>
            </div>
            <div className="Referra_Status">
                <h1>Referral Status</h1>
                </div>
                <div className="referal">
                <h2>Total referral payout:</h2>
                <img src="tron.png" width="2%" height="2%"/>
                </div>
                <div className="level_3">
                <div className="reward_10">
                <h2>Level 1</h2>
                <h2>Reward 10%</h2>
                </div>
                <div className="reward_6">
                    <h2>Level 2</h2>
                    <h2>Reward 6%</h2>
                </div>
                <div className="reward-5">
                    <div><h2>Level 3</h2></div>
                    <div><h2>Reward 3%</h2></div>
                </div>

                </div>
                <div className="inpt_cpy">  
                <input type="text" name="text" />
                <div className="cpy-hed">
                <h3>Copy</h3>
                </div>

                </div>  
                <div className="two_para">
                    <p>Minimum investment of 50 TRX to Activate referral link</p>
                    <p>Referral Rewards will be transferred to your wallet directly</p>
                </div>
                <div className="link_head">
                <h1>How it Works</h1>
                <a href="http://bi-tron.com/" className="href_pdf"> PDF GUIDE </a>
                
                </div>

                <div className="bi_tron">
            <h3>The Bi-Tron smart contract has been designed to provide everyone with a defi support fund, fully based on the tron blockchain and smart contract<br /> technology</h3>
            </div>
            <div className="four_card">
            <div className= "crypto_wallet">
            <h1>CRYPTO WALLET</h1>
            <p>To start investing users must be logged in to a crypto wallet that supports Tron (TRX). The most popular Tron wallets that have the most users are TronLink, TronWallet</p>
            </div>
            <div className="smart-contract">
            <h1>SMART CONTRACT</h1>
            <p>Bi-Tron smart contract generates 18.28% daily dividends untill 7 days based on your investment and distribute your dividends to your balance every second</p>
            </div>
            </div>
            <div className="four_invest">
            <div className= "crypto_profit">
            <h1>INVESTMENT PROFIT</h1>
            <p>The profit (dividends) accrued to your account on a daily basis and in real-time. You can withdraw the dividends at any time</p>
            </div>
            <div className="smart-rewrd">
            <h1>Referral Reward</h1>
            <p>All those who are invited to the fund by your 1st level referral become your 2nd level referrals and also bring you additional profit</p>
            </div>
            </div>
            <div className="about-bi">
                <h1>About Bi-Tron</h1>
                <p>Bi-Tron is a tron based smart contract built on blockchain. It can not be edited or deleted and its autonomous operation can not be influenced or manipulated.</p>
                <p>All dividends and income are automatically proccessed by the smart contracp</p>
            </div>
            <div className="bitr">
            <h1>Bi-Tron</h1>
            </div>
            <div className="copy_right">
            <p>Copyright © All rights reserved | Bi-Tron</p>
            </div>
        </>
    )
}

export default App;
