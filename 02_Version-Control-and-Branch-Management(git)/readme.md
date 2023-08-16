## **(01) Version Control and Branch Management**

### A. Version Control

Versioning adalah mengatur versi dari source code program, terdapat 3 tool untuk versioning yaitu, Version Control System (VSC), Source Code Manager (SCM), dan Revision COntrol System (RCS).
Version Control dibagi menjadi 3 yaitu Single User, Centralized, dan Distributed.

### B. Git

Git merupakan salah satu Version Control System (VSC) yang paling populer saat ini, digunakan oleh para developer untuk mengembangkan software secara bersama-sama.

### C. Perintah Git dan Workflow

Terdapat beberapa perintah dasar yang sering digunakan dan penting dalam git, yaitu

> - git config
> - git init, untuk menginisialisasi project ke repository
> - git add, menambahkan project ke repository
> - git commit, melakukan commit/save ke repository
> - git branch, berpindah antar branch membuat branch baru atau menghapus branch
> - git merge, menggabungkan branch-branch

Workflow dalam git sebaiknya dilakukan dengan tanpa menyentuh branch "master", tetapi membuat branch baru dengan nama "develop", kemudian membuat branch baru untuk commit setelah itu melakukan merge pada branch commit ke branch "develop", setelah semua selesai dan fix baru di merge ke branch "master".
