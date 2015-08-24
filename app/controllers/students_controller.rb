require 'nokogiri' 
require 'open-uri'


class StudentsController < ApplicationController
  def index
    all_profiles if Student.all.empty?
    @students = Student.all.sort_by { |stu| stu.score }
  end

  # def show
  #   @student = Student.find(params[:id])
  # end

  # def new
  #   @student = Student.new
  #   get_profile(@student.username)
  # end

  # def create
  # end

  # def update
  # end

  # def destroy
  # end


  private #explain why these methods were made private

  # Explain the params addition 
  # def student_params
  #   params.require(:student).permit(:name, :username, :score)
  # end

  # Get data from learn per user
  def all_profiles
    students = ["sdolmo", "Bmesa620", "BrunaNett", "Cranium1", "DJoseph1250", "EstherMo", "GxDesign", "Ilapides", "JaimieWalker", "KingLemuel", "LewisMatos", "Omrika", "PurpIeHaze", "RaptorDog", "Samueljoli", "ZalmanB", "akpersad", "cloudleo", "damianlajara", "dylan-okeefe", "feljen", "gil93", "henrypl95", "hnae6443", "jmdelvalle", "lawrencechong", "peterhan92", "skoltz", "techsin", "wolfwzrd", "mannybeso", "Gettekt"] 

    # students = [  "KingLemuel", "LewisMatos", "Omrika", "PurpIeHaze", "RaptorDog", "damianlajara", "dylan-okeefe",  "hnae6443", "jmdelvalle", "lawrencechong", "peterhan92", "skoltz", "techsin", "wolfwzrd", "mannybeso", "Gettekt"] 
    students.each { |student| get_profile(student) } 
  end

  def get_profile(username)
    doc = Nokogiri::HTML(open("https://learn.co/#{username}", 'Accept' => 'text/html'))
    name = doc.css('.row.user-name span.h3.title').text
    score = doc.css('div[data-track-id="1564"] .col-sm-3.lessons-complete-container h3').text.to_i
    Student.create(name: name, username: username, score: score)
  end
end


