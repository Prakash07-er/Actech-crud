import React from 'react'

const Navbar = () => {
  return (
<nav class="navbar-expand-lg navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Actech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Price</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Brand</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar