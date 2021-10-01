<script>
import { user } from "./store.js";
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
</style>

<h1 class="text-9xl">Formulario</h1>
<form class="content">
  <p>Nombre</p>
  <input type="text" bind:value={$user.Nombre} />
  <p>Apellido</p>
  <input type="text" bind:value={$user.Apellido} />
  <p>Telefono</p>
  <input type="text" bind:value={$user.Telefono} />
</form>
<p>
	{JSON.stringify($user, 0, 2)}</p>

