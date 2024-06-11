import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { CustomPostFormValidators } from './validators';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  postForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      userId: [1, [Validators.required, CustomPostFormValidators.userIdValidator]],
      title: ['', [Validators.required, CustomPostFormValidators.titleValidator]],
      body: ['', [Validators.required, CustomPostFormValidators.bodyValidator]]
    })

  }

  onSubmit() {

    try {

      const postValues = this.postForm.value;

      this.postService.createPost(postValues).subscribe((response) => {
        console.log('Post saved succesfully');
        console.log(response);
      },
        (error) => {
          console.log('=========> Observable error.')
          this.errorMessage = 'Something went wrong!';
        }
      )
    } catch (e) {
      console.log("Error !!!!!", e);
      this.errorMessage = "Something wrong guys";
    }

  }


}
