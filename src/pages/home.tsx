/* eslint-disable react-refresh/only-export-components */
import { useState} from 'react';
import Layout from "../components/layout/landing"
import Index from '../components/home/index'
import Upcoming from '../components/home/upcoming'
import Header from "../components/layout/header"
import Trending from "../components/home/trending"
import Content from "../components/home/content"
import { Box } from '@mui/joy';
import Footer from '../components/layout/footer';

export default function Home() {

  const [addrInfo, setAddrInfo] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [netInfoState, setNetInfoState] = useState({
    icon: 'icons/ether.svg', 
    name: 'Ethereum Mainnet', 
    chainId: "0x1",
    nativeCurrency: { 
      name: 'ether', 
      decimals: 18, 
      symbol: 'eth' ,
    },
    rpcUrls: 'https://eth.drpc.org/'
  });

  return (
    <Layout>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Header addrInfo={addrInfo} setAddrInfo={setAddrInfo} netInfoState={netInfoState} setNetInfoState={setNetInfoState}/>
        {/* <ChattingBox
          showMessage={true} 
          // setShowMessage={setShowMessage}
        /> */}
        <Index addrInfo={addrInfo}/>
        <Upcoming />
        <Trending />
        <Content />
        <Footer />
      </Box>
    </Layout>
  )
}
