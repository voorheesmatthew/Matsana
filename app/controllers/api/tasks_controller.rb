class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)

    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = Team.find(params[:team_id]).tasks
    render "api/tasks/index"
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render "api/projects/show"
  end

  private

  def task_params
    params.require(:task).permit(:task_name, :due_date, :complete, :team_id, :user_id, :project_id)
  end
end
