import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import TimelineSlide from "../TimelineSlide/TimelineSlide";
import _web3 from 'web3';
import BigNumber from 'bignumber.js'

// const PRESALE_ADDRESS = '0xC08c7d755f8950e0b41b43f27b0A10d79029330D';
const PRESALE_ADDRESS = '0x0FF6eD3C23BeB34E6E7fbf45Fb906E8a82110C60';
const TOKEN_ADDRESS = '0x9f47087641498365940595053B76fBA52064071f';

const TOKEN_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    marginTop: 50,
  },
  max: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  inputContainer: {
    display: "flex", alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column'
    }
  },
  buyBtn: {
    width: 200,
    height: 45,
    marginLeft: 20,
    marginTop: 18,
  },
}));

const Balance = () => {
  const classes = useStyles();
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [isTxPending, setIsTxPending] = useState(false);
  const [balance, setBalance] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);
  const [amount, setAmount] = useState(0);
  const [amountErr, setAmountErr] = useState(null);
  const [max, setMax] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setWeb3(new _web3(ethereum))
      setAccount(accounts[0]);
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    loadBalance();
  }, [account])

  const loadBalance = async () => {
    if (account) {
      const bal = await web3.eth.getBalance(account);
      setBalance(new _web3.utils.BN(bal));

      const contract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
      const tBal = await contract.methods.balanceOf(account).call();
      console.log(tBal);
      setTokenBalance(new _web3.utils.BN(tBal).div(new _web3.utils.BN('100000')))
    }
  }

  const selectMaxBalance = () => {
    setMax(true)
    setAmount(parseFloat(_web3.utils.fromWei(balance)).toFixed(5));
  }

  const onAmountChange = (event) => {
    setMax(false);
    const amount = event.target.value;
    setAmount(amount ?? 0);
    if (!amount || amount === '' || amount === '0') return;
    if (parseFloat(_web3.utils.toWei(amount)) > balance)
      setAmountErr("Invalid Amount!");
    else
      setAmountErr(null);
  }

  const buy = async () => {
    if (isTxPending || !web3 || !account) return;

    setIsTxPending(true);
    try {
      const tx = await web3.eth.sendTransaction({
        from: account,
        to: PRESALE_ADDRESS,
        value: max ? balance : _web3.utils.toWei(amount),
      });
      loadBalance();
      console.log(tx);
    } catch (e) {
      console.log(e)
    }
    setIsTxPending(false);
  }

  return (
    <div className={classes.root}>
      <div className={classes.inputContainer} >
        {/* input */}
        <div>
          <Typography color="primary" style={{ marginLeft: 10 }}>
            YOUR ETH BALANCE: {balance ? parseFloat(_web3.utils.fromWei(balance)).toFixed(5) : 0}
          </Typography>
          <Typography color="primary" style={{ marginLeft: 10 }}>
            YOUR TOKEN BALANCE: {tokenBalance ? tokenBalance.toNumber() : 0}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            onChange={onAmountChange}
            value={amount}
            error={amountErr}
            InputProps={{
              endAdornment: (
                <>
                  <Typography color="secondary" style={{ marginRight: 10 }}>
                    ETH
                  </Typography>
                  <Typography className={classes.max}>
                    <b onClick={() => selectMaxBalance()}>MAX</b>
                  </Typography>
                </>
              ),
            }}
          />
        </div>
        {/* button */}
        <div>
          <Button onClick={() => buy()} style={{marginTop: 40}} className={classes.buyBtn} variant="outlined" color="primary">
            Buy
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 80, }} />
      <TimelineSlide />
    </div>
  );
};

export default Balance;
