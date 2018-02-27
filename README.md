# NgrxAware
> **Make sure** that you have installed all `node_modules`

## Start Client

- Execute `npm start` for a dev server.
- Navigate to `http://localhost:4200`.

## Start Backend

- Execute `npm run api` to start the HTTP-API.
- The API is hosted on `http://localhost:4280`.

|        |Url|Description|
|--------|---------|-----------|
|`POST`  |/register|Add a new user|
|`POST`  |/login   |Logging in a existing user `[1]`|
|`GET`   |/is-user-authenticated|Check if user is authenticated|
|`GET`   |/is-email-taken|Check if e-mail address is already in use|
|`GET`   |/notes/all|Gets all notes|
|`GET`   |/notes/single/:guid|Gets a single note by its GUID|
|`POST`  |/notes/create/|Creates a new note|
|`PUT`   |/notes/update/|Updates a note|
|`DELETE`|/notes/remove/:guid|Deletes the specified note|

> **[1]** You can already log in with the user `trainee@training.com` having the password `1234`.

## Material Icons

- The material icon font is installed in this project.
- With the <md-icon> component fomr `@angular/material` it is easy to use them
  - *Sample:* `<md-icon>home</md-icon`
- Check [material.io/icons/](https://material.io/icons/) for the icon reference

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
