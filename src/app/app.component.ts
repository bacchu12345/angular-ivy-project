import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInint {
  loadedPosts = [];
  name = 'Angular ' + VERSION.major;
  constructor(private http: HttpClient) {}
  ngOnInint() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {}
  onFetchPosts() {
    this.http
      .get('http://34.135.235.174/user/retreivedata')
      .subscribe((posts) => {
        console.log(posts);
      });
  }
  onClearPosts() {}
}
