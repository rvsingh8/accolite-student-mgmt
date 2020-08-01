<template>
  <div>
    <div class="container">
      <div id="feedback-form">
        <h1 class="text-3xl">Search Student</h1>
        <hr />

        <div class="flex flex-col items-start">
          <label class="text-left" for="search">
            <b>Enter Student Name/Roll Number</b>
          </label>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Enter Student Name/Roll Number"
            name="search"
            id="search"
            required
          />
        </div>

        <div class="w-full">
          <div class="flex-none flex justify-center my-3">
            <button class="cv-btn cv-btn-primary" v-on:click="addStudent">Search Student</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "search-student",
  data() {
    return {
      searchQuery: null,
      student: null,
    };
  },
  methods: {
    searchStudent() {
      Axios.get("http://localhost:8080/search?query=" + this.searchQuery).then(
        (response) => {
          this.student = response.data;
        }
      );
    },
  },
};
</script>
<style >
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr {
  background-color: #dddddd;
}
</style>