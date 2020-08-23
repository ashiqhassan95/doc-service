<template>
  <div id="app">
    <b-container>
      <header>
        <div>
          <b-navbar toggleable="sm" type="dark" variant="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav>
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/request">Request</router-link>
                <router-link class="nav-link" to="/service">Services</router-link>
                <router-link class="nav-link" to="/payment">Payments</router-link>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </header>
      <main class="py-4">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
    </b-container>
  </div>
</template>

<style lang="scss">
// Webpack example
@import "~bootstrap";
@import "~bootstrap-vue";
@import "~bootstrap-steps/scss/bootstrap-steps";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.carousel-caption {
  background: #00000052;
  border-radius: 15px;
  padding: 10px 5px;
}

.step-content {
  min-width: 3.5em;
  width: 3.5em;
  padding-top: 0;
}

.step-circle {
  width: 1.3rem;
  height: 1.3rem;
  font-size: 12px;
}

.step-text {
  font-size: 12px;
  margin-top: 0.1em;
}

.step-circle::before {
  width: calc(3.5rem + 1rem - 1.5rem);
}
.font-12 {
  font-size: 12px;
}
.font-13 {
  font-size: 13px;
}
.font-14 {
  font-size: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
.nav-link.active {
    border-bottom: 1px solid #fff;
}
</style>
