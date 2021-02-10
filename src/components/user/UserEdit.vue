<template>
  <div class="card">
    <div class="card-header">
      User Edit
    </div>
    <div class="card-body">
      <p>
        Edit User with ID: {{ $route.params.id }}
      </p>
      <form :action="`/user/${$route.params.id}`">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">Enter your name</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
