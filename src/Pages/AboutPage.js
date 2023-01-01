import styled from "@emotion/styled"
import {Typography} from "@mui/material"

const SimpleLink = ({website, name}) => {
    return <Typography color={"textPrimary"} variant='body1'><a href={website} target="_blank" rel="noreferrer">{name || website}</a></Typography>
}

export default function AboutPage() {
    return <>
    <Typography color={"textPrimary"} variant='h4'>About Me!</Typography>
    <Typography color={"textPrimary"} variant='body1'>Hi! I'm Anton. Just a programmer looking for fun things to do!</Typography>
    <Typography color={"textPrimary"} variant='body1'><a href="http://antonyip.com" target="_blank" rel="noreferrer">www.antonyip.com</a></Typography>
    <Typography color={"textPrimary"} variant='body1'><a href="https://twitter.com/msgAnton" target="_blank" rel="noreferrer">@msgAnton</a></Typography>
    <Typography color={"textPrimary"} variant='body1'></Typography>
    <br />
    <Typography color={"textPrimary"} variant='body1'>You can find the sources of this project at... </Typography>
    <Typography color={"textPrimary"} variant='body1'><a href="https://github.com/antonyip/near-dashboard" target="_blank" rel="noreferrer">Link to Github</a></Typography>
    <br />
    <Typography color={"textPrimary"} variant='body1'>Visit the organizations that motivated me to build this site! </Typography>
    <Typography color={"textPrimary"} variant='body1'><a href="https://flipsidecrypto.xyz" target="_blank" rel="noreferrer">FlipsideCrypto</a></Typography>
    <Typography color={"textPrimary"} variant='body1'><a href="https://metricsdao.xyz" target="_blank" rel="noreferrer">MetricsDAO</a></Typography>
    <br />
    <Typography color={"textPrimary"} variant='body1'>Other really good sources of info...</Typography>
    <SimpleLink website={"https://near-dashboard.vercel.app/"}></SimpleLink>
    <SimpleLink website={"https://cityofnear.xyz/"}></SimpleLink>
    <SimpleLink website={"https://near-directory.streamlit.app/"}></SimpleLink>
    <SimpleLink website={"https://app.flipsidecrypto.com/dashboard/the-city-of-near-xG8L9i"}></SimpleLink>
    <SimpleLink website={"https://kiwi-paradox-650.notion.site/Measuring-User-Activity-on-NEAR-914d41d0e75442868853b03ec4bd3d2c"}></SimpleLink>
    <SimpleLink website={"https://next.flipsidecrypto.xyz/forgash/near-developer-report-2022-year-end-UU6MTw"}></SimpleLink>
    
    </>
}
