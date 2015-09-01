class StudentsController < ApplicationController
  
  def index
    @students = Student.all.sort_by { |stu| stu.score }
  end

  def show
  end

end


