/*jshint esversion: 6 */
import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const requestTasks = (userId, teamId) => {
  return dispatch => {
    return TaskAPIUtil.fetchTasks(userId, teamId)
    .then(tasks => {
      return dispatch({
        type: RECEIVE_ALL_TASKS,
        tasks
      });
    });
  };
};

// export const requestTask = (id) => {
//   return dispatch => {
//     return TaskAPIUtil.fetchTask(id)
//     .then(task => {
//       return dispatch({
//         type: RECEIVE_TASK,
//         task
//       });
//     });
//   };
// };

export const createTask = (task) => {
  return dispatch => {
    return TaskAPIUtil.createTask(task)
    .then(task => {
      return dispatch({
        type: RECEIVE_TASK,
        task
      });
    });
  };
};

export const updateTask = (task) => {
  return dispatch => {
    return TaskAPIUtil.updateTask(task)
    .then(task => {
      return dispatch({
        type: RECEIVE_TASK,
        task
      });
    });
  };
};

export const deleteTask = (id) => {
  return dispatch => {
    return TaskAPIUtil.deleteTask(id)
    .then(task => {
      return dispatch({
        type: REMOVE_TASK,
        taskId: id
      });
    });
  };
};
