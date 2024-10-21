<script>
export default {
  data() {
    return {
      navItems: [
        {label: 'Home', route: '/'},
        {label: 'Galleries', route: '/galleries'},
        {label: 'Artists', route: '/artists'},
        {label: 'Contact', route: '/contact'}
      ]
    }
  }
}
</script>

<template>
  <div class="navbar">
    <nav>
      <ul>
        <li v-for="(item,index) in navItems" :key="index">
          <router-link
              :to="item.route"
              active-class="active"
          >{{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  overflow: hidden;
  background-color: var(--bluegray-900);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: var(--p-2);
  text-decoration: none;
}

li a:hover, .active {
  background-color: var(--bluegray-700);
}
</style>