require 'nokogiri' 
require 'open-uri'
require 'pry'


class Student < ActiveRecord::Base

  def self.get_all_profiles
     students = ["sdolmo", "Bmesa620", "BrunaNett", "Cranium1", "DJoseph1250", "EstherMo", "GxDesign", "Ilapides", "JaimieWalker", "KingLemuel", "LewisMatos", "Omrika", "PurpIeHaze", "RaptorDog", "Samueljoli", "ZalmanB", "akpersad", "cloudleo", "damianlajara", "dylan-okeefe", "feljen", "gil93", "corasan", "hnae6443", "jmdelvalle", "lawrencechong", "peterhan92", "skoltz", "techsin", "wolfwzrd", "mannybeso", "Gettekt"] 
     students.each { |student| get_profile(student) } 
  end

  def self.get_profile(username)
    doc = Nokogiri::HTML(open("https://learn.co/#{username}", 'Accept' => 'text/html'))
    name = doc.css('.row.user-name span.h3.title').text
    score = doc.css('div[data-track-id="1564"] .col-sm-3.lessons-complete-container h3').text.to_i 

    Student.find_or_create_by(username: username) do |student|
      student.update_attributes(:name => name, :score => score)
    end    
  end

end
