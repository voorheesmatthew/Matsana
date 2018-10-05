# Sample State
```js
{
  entities: {
    users: {
      19: {
        id: 19,
        username: "g8z",
        img_url: https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg
      },
      21: {
        id: 21,
        username: "chesks",
        img_url: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTP90uhL4izPjwyU6abOgLGtwhdaHYIyalWc4pVzxgoG3jqzAzQ
      },
      33: {
        id: 33,
        username: "bayz",
        img_url: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/440px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg
      }
    },
    teams: {
      1: {
        id: 1,
        team_name: "Marketing"
      },
      7: {
        id: 7,
        team_name: "Design"
      }
    },
    teams_users: {
      1: {
        id: 1,
        team_id: 7,
        user_id: 19
      },
      2: {
        id: 2,
        team_id: 1,
        user_id: 21
      },
      3: {
        id: 3,
        team_id: 1,
        user_id: 33
      },
      4: {
        id: 4,
        team_id: 7,
        user_id: 33
      }
    },
    projects: {
      3: {
        id: 3,
        project_name: "Build Computer",
        layout: "Board",
        owner_id: 19,
        team_id: 7
      },
      9: {
        id: 9,
        project_name: "Increase Experiences",
        layout: "List",
        owner_id: 21,
        team_id: 1
      },
      11: {
        id: 11,
        project_name: "Build Mouse",
        layout: "List",
        owner_id: NULL,
        team_id: 7
      },
      12: {
        id: 12,
        project_name: "Make website",
        layout: "Board",
        owner_id: 33,
        team_id: 1
      },
      13: {
        id: 13,
        project_name: "Go to moon",
        layout: "Board",
        owner_id: NULL,
        team_id: 1
      }
    },
    projects_users: {
      1: {
        id: 1,
        project_id: 3,
        user_id: 19
      },
      2: {
        id: 2,
        project_id: 11,
        user_id: 19
      },
      3: {
        id: 3,
        project_id: 9,
        user_id: 21
      },
      4: {
        id: 4,
        project_id: 11,
        user_id: 33
      },
      5: {
        id: 5,
        project_id: 12,
        user_id: 33
      },
      6: {
        id: 6,
        project_id: 13,
        user_id: NULL
      }
    },
    tasks: {
      3: {
        id: 3,
        task_name: "Find billboards",
        description: "Good for marketing",
        due_date: 01/14/2020,
        team_id: 1,
        user_id: NULL
      },
      4: {
        id: 4,
        task_name: "Talk to people",
        description: NULL,
        due_date: 02/20/2019,
        team_id: 1,
        user_id: 33
      },
      5: {
        id: 5,
        task_name: "Start bank account",
        description: "For the money",
        due_date: 10/21/2018,
        team_id: 7,
        user_id: 19
      },
      6: {
        id: 6,
        task_name: "Find garage",
        description: "Need adequate build space",
        due_date: 10/21/2019,
        team_id: 7,
        user_id: 19
      },
      8: {
        id: 8,
        task_name: "Go to Italy",
        description: "Might have experiences",
        due_date: 11/14/2018,
        team_id: 1,
        user_id: 21
      },
      9: {
        id: 9,
        task_name: "Get cords",
        description: "For electronics",
        due_date: 07/08/19,
        team_id: 7,
        user_id: 33
      }
    },
    projects_tasks: {
      1: {
        id: 1,
        project_id: 3,
        task_id: 6
      },
      2: {
        id: 2,
        project_id: 3,
        task_id: 9
      },
      3: {
        id: 3,
        project_id: 11,
        task_id: 9
      },
      4: {
        id: 4,
        project_id: 9,
        task_id: 8
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["The username or password is not correct."],
  },
  session: { currentUserId: 21 }
  }
}
```
