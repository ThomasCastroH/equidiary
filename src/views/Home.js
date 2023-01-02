import NavBar from "../components/NavBar";
import svg from "../assets/svg/HorseAndRider12.svg"
import { Button } from "@mui/material";

function Home () {
    return (
        <main className="main">
            <NavBar />
            <section className="main_pres">
                <img className="main_pres_svg" src={svg} alt="Horse Rider SVG" />
                <span className="main_pres_desc">
                    <h1 className="main_pres_desc_title">Profitez de votre carnet de santé en ligne</h1>
                    <p className="main_pres_desc_text">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan lacus eget condimentum lobortis. Ut vel fringilla elit, ut posuere metus. Ut scelerisque nunc a nisl finibus, vitae commodo tortor consectetur. Donec consequat, ex vel volutpat suscipit, tellus orci laoreet elit, vitae rutrum dolor erat ac purus. Cras bibendum massa ac dui malesuada tempor. Vestibulum vitae mauris at nibh cursus feugiat. Integer lacinia dui sit amet nisl tempus posuere. Suspendisse potenti. Nunc felis justo, bibendum vitae sagittis hendrerit, congue nec turpis. Suspendisse eget pulvinar dui. Nullam enim justo, aliquet et massa sed, scelerisque venenatis nulla. Ut et tortor facilisis, venenatis justo id, placerat risus. Vestibulum sed metus vestibulum justo efficitur pretium. </p>
                    <Button className="main_pres_desc_button" variant="contained" sx={{backgroundColor:'#3C60A7'}}>En savoir plus</Button>
                </span>
            </section>
        </main>
    )
}

export default Home;