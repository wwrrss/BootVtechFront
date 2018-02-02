import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  networkService:NetworkService;

  posteos;

  entity = "posts/"

  constructor(networkService:NetworkService) {
    this.networkService = networkService;
  }

  post={
    "texto":""
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.posteos = this.networkService.get(this.entity);
  }

  onSubmit(form){
    this.savePost(this.post);
  }

  onDelete(post:any){
    console.log(post.id);
    this.networkService.delete(this.entity,post.id)
      .subscribe(data=>{
        this.getAllPosts();
      });
  }

  savePost(post:any){
    this.networkService.post(this.entity,post)
        .subscribe(data =>{
          this.post.texto = "";
          this.getAllPosts();
        });

  }

}
