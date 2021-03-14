<template>
  <div class="container">
    <b-card id="dark">
      <h1>Offices</h1>
      <div class="row">
        <b-label class="col-3">Address : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="add"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">City : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="ct"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">State : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="st"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">PostalCode : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="pc"></b-input>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Submit</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      Address : "",
      City : "",
      State : "",
      PostalCode: "",
    };
  },
  methods: {
    addData() {
      alert("compelet");
      const data = {
        Address: this.add,
        City: this.ct,
        State: this.st,
        PostalCode: this.pc,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function () {
          console.log("Ducument successfully written! -> MyFrom");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      const dataText = {
        Address: this.add,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Ducument successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
