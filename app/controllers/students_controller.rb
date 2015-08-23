require 'nokogiri'
require 'mechanize' 
require 'open-uri'


class StudentsController < ApplicationController
  def index
    @students = Student.all 
  end

  def show
    @student = Student.find(params[:id])
  end

  def new
    @student = Student.new
  end

  def create
  end

  def update
  end

  def destroy
  end


  private #explain why these methods were made private

  # Explain the params addition 
  def student_params
    params.require(:student).permit(:name, :username, :score)
  end

  # Scraper
  def search_learn
  end

end
