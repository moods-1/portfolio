const nonIEfiller =
`
<div class='main-container'>
<header>
    <div class='head-narrow'>
        <div id='logo'>
            <img src='/images/carl.jpg' alt='profile'>
            <h1>CARL MOODIE</h1>
        </div>
        <nav id='top-nav'>
            <ul class='nav-list'>
                <li class='top-nav-list-item'><a href='#about'>About</a></li>
                <li class='top-nav-list-item'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
        <div id='burger-box' class='d-none'>
            <img src='/images/burger.png' alt='burger' id='burger' />
        </div>
    </div>
</header>
<div class='d-none' id='vertical-nav'>
    <ul class='nav-list'>
        <li class='vertical-nav-list-item' onclick='handleLink()'>
            <a href='#about'>About</a>
        </li>
        <li class='vertical-nav-list-item' onclick='handleLink()'>
            <a href='#contact'>Contact</a>
        </li>
    </ul>
</div>
<!-- Design Section -->
<div class='circle' id='circle1'></div>
<div class='circle' id='circle2'></div>
<div class='circle' id='circle3'></div>
<div class='circle' id='circle4'></div>
<div class='circle' id='circle5'></div>
<div id='showcase'>
    <div id='project-container'>
        <!-- Dynamically rendered -->
    </div>
</div>
<!-- About and Skills -->
<div class='profile-container' id='about'>
    <div class='toolset-container'>
        <h1 class='section-title'>Full Stack Web Developer</h1>
        <div class='profile'>
            <p id='about-me'>
                The MERN and MEVN stacks are the tools that I mainly use, but I am open to learning any required skills. MongoDB (Atlas and local) and MySQL are the databases used in those stacks. I have a desire to learn new ways to bring the imagined to reality with
                clean and efficient code.
            </p>
        </div>
        <h1 class='section-title' id='skills-barometer'>Skills Barometer</h1>
        <div id='skills-box'>
            <!-- Dynamically rendered -->
        </div>
    </div>
</div>
</div>

<!-- Contact -->
<div id='contact'>
<div id='form-container'>
    <h1 class='section-title' id='contact-title'>Contact</h1>
    <form id='contact-form' method='post' action=''>
        <label for='name'></label>
        <input type='text' name='name' id='name' placeholder='Full name' maxlength='30' required /><br />
        <label for='email'></label>
        <input type='email' name='email' id='email' maxlength='30' placeholder='Email' required /><br />
        <label for='message'></label>
        <textarea name='message' id='message' placeholder='Message ...' cols='32' rows='7' required></textarea
  ><br />
  <button type='submit' id='submit-btn'>SEND</button>
</form>
</div>
</div> 

<footer>
<p>Moods Web Design, Copyright &copy; 2021</p>
</footer>
`;