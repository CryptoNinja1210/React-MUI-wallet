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
  const [netInfoState, setNetInfoState] = useState({});

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        overflowX: 'hidden'
      }}>
        <Header addrInfo={addrInfo} setAddrInfo={setAddrInfo} netInfoState={netInfoState} setNetInfoState={setNetInfoState}/>
        <Index addrInfo={addrInfo}/>
        <Upcoming />
        <Trending />
        <Content />
        <Footer />
      </Box>
    </Layout>
  )
}