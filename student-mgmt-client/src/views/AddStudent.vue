<template>
  <div>
    <div class="container">
      <div id="feedback-form">
        <h1 class="text-3xl">Add Student</h1>
        <hr />

        <div class="flex flex-col items-start">
          <label class="text-left" for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            v-model="student.name"
            placeholder="Enter Name"
            name="name"
            id="name"
            required
          />
        </div>


        <div class="flex flex-col items-start">
          <label class="text-left" for="rollnum">
            <b>Roll Number </b>
          </label>
          <input
            type="text"
            v-model="student.rollNumber"
            placeholder="Enter Roll Number"
            name="rollnum"
            id="rollnum"
            required
          />
        </div>

        <div class="w-full">
          <div class="flex-none flex justify-center my-3">
            <button class="cv-btn cv-btn-primary" v-on:click="addStudent">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "add-student",
  data() {
    return {
      student: {
        name: null,
        rollNumber: null
      },
    };
  },
  created() {
  },
  methods: {
    addStudent() {
      let httpOptions = {
        headers: { "Content-Type": "application/json" },
      };
      Axios.post("http://localhost:8080/student",this.student,httpOptions
      ).then((response) => {
        console.log("response", response);
        if (response.status == 200) {
            alert("Student added successfully");
        }
      });
    },
    home(){
        this.$router.push("/");
    }
  },
};
</script>
<style>
.container {
  padding: 16px;
  background-color: white;
}
/* Full-width input fields */
input[type="text"],
input[type="password"],
input[type="date"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
</style>