function pageLoad() {
  const content = document.getElementById("content");
  console.log("hello");

  const html = `<div class="nav">
    <button class="tab" id="home">Home</button>
    <button class="tab" id="menu">Menu</button>
    <button class="tab" id="contact">Contact</button>
  </div>
  <div class="container" id="container-home">
    <h1 class="header">Brunch Bros</h1>
    <div class="copy">
      <span>We make the best Brunch</span>
    </div>
    <div class="hours">
      <h2><strong>Hours</strong></h2>
      <ul class="hours-list">
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
      </ul>
    </div>
    <div class="location">
      <h2><strong>Location</strong></h2>
      <p>420 Yolo St Swagvile, CA</p>
    </div>
  </div>
  <div class="container" id="container-menu" style="display: none">
  <h1 class="menu-heading">Menu</h1>
  <h3 class="menu-label">Apps</h3>
  <h3 class="menu-label">Entrees</h3>
  <h3 class="menu-label">Side</h3>
  <h3 class="menu-label">Desserts</h3>
  </div>
  <div class="container" id="container-contact" style="display: none">
  <h2>Dont contact us</h2>
  </div></div>`;

  content.insertAdjacentHTML("afterbegin", html);
}

export default pageLoad;
