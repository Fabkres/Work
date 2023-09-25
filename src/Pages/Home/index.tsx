import { useState } from "react";
import Calculator from "../../Components/Calculator";
import Layout from "../../Components/Layout";
import Subtract from "../../Components/Subtract";
import { Padding } from "../../Style/GlobalStyles";
import { ContainerHome, Grid } from "./style";
import Feedback from "../../Components/Feedback";


const Homepage = () => {

    const [page, setPage] = useState(0)
    return (
        <Layout value={page} set={setPage}>
            {page === 0 ? <ContainerHome>
                <Padding padding="16px" />
                <Grid>
                    <Subtract />
                    <Calculator />
                </Grid>
            </ContainerHome> : page === 1 ? <ContainerHome><Feedback /></ContainerHome> : <div>Not found</div>}
        </Layout>
    )
}

export default Homepage;