namespace :scrape do
  desc "Scrape learn.co for user profile data"
  task learn: :environment do
  	Student.get_all_profiles
  	puts "Scrape completed"
  end
end
