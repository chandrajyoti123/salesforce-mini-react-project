
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"
import Button from "../Button/Button"




export default function Footer() {
  return (
    <>
        
      <div className="maincontaineroffooter">

        <div className="sectionoffoter ">
          <div>  <svg xmlns="http://www.w3.org/2000/svg" width="92" height="64" viewBox="0 0 92 64" className="logoSvg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#00A1E0" d="M38.05 6.98c2.948-3.071 7.055-4.978 11.595-4.978 6.035 0 11.302 3.366 14.106 8.363a19.494 19.494 0 0 1 7.974-1.695c10.886 0 19.71 8.902 19.71 19.885 0 10.983-8.824 19.885-19.71 19.885-1.331 0-2.629-.133-3.884-.386-2.469 4.403-7.177 7.379-12.578 7.379-2.261 0-4.4-.52-6.303-1.451C46.456 59.872 40.623 64 33.826 64c-7.078 0-13.112-4.48-15.427-10.761a15.176 15.176 0 0 1-3.137.327C6.833 53.567 0 46.663 0 38.146a15.442 15.442 0 0 1 7.631-13.357 17.662 17.662 0 0 1-1.46-7.053C6.171 7.94 14.122 0 23.93 0a17.73 17.73 0 0 1 14.12 6.98" />
              <path fill="#FFF" d="M13.244 33.19l.37-1.027c.059-.176.192-.118.246-.085.103.061.177.116.31.194 1.09.689 2.1.696 2.415.696.816 0 1.322-.432 1.322-1.015v-.03c0-.634-.78-.874-1.681-1.15l-.2-.064c-1.237-.352-2.56-.861-2.56-2.427v-.032c0-1.486 1.199-2.523 2.915-2.523l.188-.002c1.008 0 1.982.293 2.688.721.064.04.126.114.09.212l-.38 1.027c-.067.175-.25.059-.25.059a5.41 5.41 0 0 0-2.382-.611c-.728 0-1.196.386-1.196.91v.033c0 .611.802.872 1.732 1.175l.16.05c1.233.39 2.549.93 2.549 2.415v.031c0 1.605-1.166 2.602-3.041 2.602-.921 0-1.802-.142-2.734-.637-.176-.102-.35-.19-.522-.315-.018-.026-.097-.057-.04-.207zm27.457 0l.371-1.027c.054-.168.211-.106.245-.085.102.063.178.116.31.194 1.092.689 2.1.696 2.418.696.813 0 1.32-.432 1.32-1.015v-.03c0-.634-.779-.874-1.68-1.15l-.2-.064c-1.239-.352-2.562-.861-2.562-2.427v-.032c0-1.486 1.2-2.523 2.916-2.523l.187-.002c1.008 0 1.983.293 2.69.721.062.04.125.114.09.212-.035.091-.347.931-.38 1.027-.069.175-.25.059-.25.059a5.41 5.41 0 0 0-2.383-.611c-.728 0-1.196.386-1.196.91v.033c0 .611.801.872 1.732 1.175l.16.05c1.233.39 2.548.93 2.548 2.415v.031c0 1.605-1.165 2.602-3.04 2.602-.922 0-1.803-.142-2.734-.637-.176-.102-.35-.19-.523-.315-.018-.026-.097-.057-.039-.207zm20.31-4.829c.154.516.23 1.083.23 1.682 0 .6-.076 1.165-.23 1.681a3.77 3.77 0 0 1-.71 1.361 3.384 3.384 0 0 1-1.204.906c-.48.22-1.044.33-1.678.33-.634 0-1.2-.11-1.678-.33a3.384 3.384 0 0 1-1.204-.906 3.793 3.793 0 0 1-.711-1.36 5.909 5.909 0 0 1-.23-1.682c0-.6.077-1.166.23-1.682.154-.52.393-.978.71-1.36a3.442 3.442 0 0 1 1.205-.914c.479-.224 1.042-.337 1.678-.337.636 0 1.199.113 1.678.337.478.223.884.53 1.204.914.318.382.558.84.71 1.36zm-1.564 1.682c0-.907-.168-1.62-.502-2.12-.33-.496-.83-.736-1.526-.736-.696 0-1.192.24-1.518.736-.327.5-.494 1.213-.494 2.12 0 .906.167 1.624.496 2.128.324.502.82.745 1.516.745.696 0 1.196-.244 1.526-.745.332-.504.502-1.222.502-2.128zm14.422 2.63l.384 1.062c.05.13-.063.187-.063.187-.593.23-1.416.394-2.217.394-1.358 0-2.398-.391-3.092-1.163-.69-.77-1.042-1.817-1.042-3.116 0-.601.087-1.17.257-1.685.17-.52.425-.978.761-1.36a3.613 3.613 0 0 1 1.261-.914c.5-.223 1.088-.335 1.744-.335.443 0 .837.027 1.175.077.361.056.842.186 1.045.265.037.014.14.064.098.185-.148.417-.249.689-.386 1.069-.06.162-.182.108-.182.108-.515-.162-1.009-.236-1.654-.236-.775 0-1.357.258-1.737.763-.384.509-.599 1.176-.602 2.063-.003.973.241 1.694.673 2.14.431.445 1.033.67 1.791.67.307 0 .597-.02.858-.061.258-.041.5-.121.728-.21 0 0 .147-.055.2.097zm8.01-4.607c.341 1.194.163 2.225.157 2.282-.013.136-.153.138-.153.138l-5.299-.004c.033.805.226 1.375.616 1.762.383.379.991.622 1.814.623 1.258.003 1.795-.25 2.176-.391 0 0 .145-.052.2.092l.345.971c.07.163.014.22-.045.253-.332.183-1.137.525-2.669.529-.743.003-1.39-.103-1.923-.31a3.502 3.502 0 0 1-1.333-.883 3.497 3.497 0 0 1-.769-1.347 5.713 5.713 0 0 1-.239-1.692c0-.6.077-1.17.232-1.691.155-.525.396-.988.717-1.377a3.479 3.479 0 0 1 1.221-.93c.486-.229 1.088-.341 1.75-.341.567 0 1.085.122 1.516.308.332.142.666.399 1.008.767.216.232.545.74.678 1.241zm-5.27 1.107h3.78c-.039-.486-.134-.922-.352-1.25-.332-.496-.79-.769-1.485-.769-.696 0-1.19.273-1.517.769-.214.328-.352.746-.427 1.25zm-37.175-1.107c.34 1.194.165 2.225.159 2.282-.014.136-.154.138-.154.138l-5.3-.004c.034.805.226 1.375.617 1.762.383.379.99.622 1.813.623 1.258.003 1.797-.25 2.177-.391 0 0 .145-.052.199.092l.346.971c.07.163.014.22-.044.253-.334.183-1.14.525-2.67.529-.744.003-1.391-.103-1.923-.31a3.514 3.514 0 0 1-1.334-.883 3.506 3.506 0 0 1-.767-1.347 5.68 5.68 0 0 1-.241-1.692c0-.6.078-1.17.232-1.691a3.88 3.88 0 0 1 .718-1.377 3.488 3.488 0 0 1 1.22-.93c.488-.229 1.09-.341 1.75-.341a3.85 3.85 0 0 1 1.518.308c.332.142.666.399 1.007.767.216.232.545.74.677 1.241zm-5.271 1.107h3.782c-.04-.486-.135-.922-.352-1.25-.33-.496-.79-.769-1.485-.769-.696 0-1.191.273-1.516.769-.216.328-.353.746-.43 1.25zm-9.346-.253s.418.037.874.103v-.224c0-.707-.147-1.04-.436-1.263-.296-.226-.738-.343-1.31-.343 0 0-1.29-.016-2.31.538-.047.028-.086.044-.086.044s-.128.045-.174-.086L21 26.681c-.058-.145.047-.211.047-.211.477-.372 1.633-.597 1.633-.597a8.711 8.711 0 0 1 1.421-.131c1.058 0 1.877.246 2.434.733.558.489.842 1.277.842 2.339l.003 4.848s.011.14-.122.172c0 0-.195.054-.37.095-.177.041-.815.171-1.336.259a9.744 9.744 0 0 1-1.61.134c-.515 0-.987-.048-1.403-.143a2.92 2.92 0 0 1-1.079-.468 2.192 2.192 0 0 1-.69-.829c-.163-.333-.245-.74-.245-1.21 0-.461.097-.872.284-1.222.188-.348.446-.643.77-.874a3.425 3.425 0 0 1 1.105-.513c.413-.11.852-.167 1.306-.167.333 0 .611.007.827.024zm-2.109 3.724c-.003-.001.475.375 1.554.309.758-.046 1.43-.19 1.43-.19v-2.41s-.678-.111-1.439-.122c-1.079-.013-1.539.384-1.536.383-.318.226-.473.561-.473 1.025 0 .297.053.529.16.691.067.107.096.147.304.314zm44.855-6.455c-.05.145-.307.871-.4 1.112-.034.092-.09.155-.193.144 0 0-.304-.07-.582-.07-.191 0-.464.024-.71.1a1.586 1.586 0 0 0-.654.393c-.194.187-.351.45-.465.78-.116.332-.176.86-.176 1.39v3.948a.16.16 0 0 1-.16.161h-1.391a.162.162 0 0 1-.164-.16v-7.905c0-.089.065-.16.154-.16h1.357c.09 0 .154.071.154.16v.646c.203-.272.567-.512.896-.66.33-.15.699-.26 1.366-.22.347.021.798.116.889.151a.144.144 0 0 1 .079.19zm-13.07-3.663c.037.015.138.064.098.184l-.407 1.113c-.034.084-.056.134-.229.082a2.388 2.388 0 0 0-.707-.11c-.21 0-.4.027-.568.083a1.084 1.084 0 0 0-.444.274 1.545 1.545 0 0 0-.372.566c-.195.56-.27 1.157-.28 1.195h1.694c.143 0 .188.066.174.171l-.198 1.102c-.032.16-.177.154-.177.154h-1.746l-1.193 6.756a10.426 10.426 0 0 1-.466 1.78c-.187.489-.38.846-.69 1.187a2.43 2.43 0 0 1-.979.682c-.367.135-.813.204-1.3.204-.232 0-.482-.005-.777-.075a4.198 4.198 0 0 1-.485-.142c-.065-.023-.118-.106-.08-.212.036-.105.35-.964.392-1.077.054-.136.192-.084.192-.084.094.04.16.066.285.091.127.025.297.047.426.047.231 0 .441-.028.624-.09.22-.071.35-.2.484-.372.14-.181.254-.426.371-.755.117-.333.224-.773.316-1.306l1.188-6.633h-1.17c-.14 0-.188-.066-.172-.172l.196-1.102c.031-.16.18-.154.18-.154h1.201l.065-.358c.18-1.064.537-1.873 1.065-2.404.531-.535 1.286-.805 2.244-.805.274 0 .516.018.721.055.201.038.354.073.524.125zM30.817 33.986c0 .09-.062.161-.152.161H29.26c-.09 0-.151-.072-.151-.16V22.674c0-.087.062-.159.15-.159h1.406c.09 0 .152.072.152.16v11.311z" />
            </g>
          </svg> </div>
          <br></br> <br></br>
          <div className="icons">
            <div><i class="fa-brands fa-square-instagram"></i> </div>
            <div> <i class="fa-brands fa-square-facebook"></i> </div>
            <div> <i class="fa-brands fa-square-youtube"></i> </div>
            <div> <i class="fa-brands fa-square-twitter"></i> </div>
            <div> < i class="fa-brands fa-linkedin"></i> </div>
          </div>
          <br></br>
          <div className="text1">
            <b>Call us at 1800-420-7332 </b>
          </div>



         </div>

        <div className="section">

          <h6> New to Salesforce?</h6>
          <ul>
            <li> why salesforce ?</li>
            <li> What is crm? </li>
            <li> explore All Products . </li>
            <li> what is cloud computing ?</li>
            <li> customer services </li>
            <li> product pricing  </li>
          </ul>
        </div>

        <div className="section">

          <h6> About  Salesforce. </h6>
          <ul>
            <li>Our story </li>
            <li> Career</li>
            <li> press </li>
            <li> Blog</li>
            <li> security performance</li>
            <li> Best CRM Software </li>
            <li> Sustainability </li>
            <li> Legal </li>
            <li> Gives us your Feedback </li>
          
          </ul>
        </div>

        <div className="section">

          <b><h6> Popular Links</h6> </b>
          <ul>
            <li>New release Features </li>
            <li>Salesforce Mobile App </li>
            <li> Buisness App Stories </li>
            <li> Dream Force</li>
            <li>CRM Software </li>
            <li> Salesforce Plus  </li>
            <li> Salesforce for startups  </li>

          </ul>
        </div>

      </div>


        {/* this part is last blue links part */}

      <div className="lastfooterpart">


        <div className="firstpart"> 
        
            <button className="btnrearth"> <i class="fa-solid fa-globe"></i>Worldwide</button>
          {/* <Button text={`${<FontAwesomeIcon icon={faGlobe} />} Worlwide`} /> */}
        </div>

          <div className="secondpart"> 
            <p className="copyrightfoter"> © Copyright 2023 Salesforce, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
            <div className="lastlinks"> 
              <ul>
                <li>  <a href="#"> Legal</a></li>
                <li>  <a href="#"> Term of services</a></li>
                <li>  <a href="#"> Privacy </a></li>
                <li>  <a href="#"> Responsible Disclosure </a></li>
                <li>  <a href="#"> Trust </a></li>
                <li>  <a href="#"> Contact </a></li>
                <li>  <a href="#"> Cookie performance </a></li>
                <li>  <a href="#"> Your privacy Choices </a></li>
              </ul>
            </div>
          </div>
     </div>
     
    </>
      
  )
}
