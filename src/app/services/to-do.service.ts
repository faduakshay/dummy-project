import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { defineBase } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoCollection: AngularFirestoreCollection;
  toDoDoc: AngularFirestoreDocument;
  public collectionRef: any;
  public query: any;
  constructor(public db: AngularFirestore) { }
  getToDOList(userEmail) {
      this.collectionRef = this.db.collection('tasks').ref.where('userEmail', '==', userEmail);
      // this.query = this.collectionRef.where('userEmail', '==', userEmail);
      return this.collectionRef;
  }
  addToDoList(task) {
      this.toDoCollection.add(task);
  }
  updateToDoList(id, update) {
    // Get the task document
    this.toDoDoc = this.db.doc(`tasks/${id}`);
    this.toDoDoc.update(update);
 }
 checkOrUnckechTask(id, value) {
  this.toDoDoc = this.db.doc(`tasks/${id}`);
  this.toDoDoc.update({
    isChecked: value
  });
 }
 deleteTask(id) {
  // Get the task document
  this.toDoDoc = this.db.doc(`tasks/${id}`);
  // Delete the document
  this.toDoDoc.delete();
}
}
