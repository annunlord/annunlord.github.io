# frozen_string_literal: true

require "html-proofer"

task :test do
  options = {
    assume_extension: true,
    check_html: true,
    empty_alt_ignore: true,
    timeframe: "1d",
    url_ignore: [
      "https://www.google.com/maps/place/St.+Anne's+Catholic+Church/@42.5966642,-83.7845184,17z/data=!3m1!4b1!4m5!3m4!1s0x8823541d66480a55:0x1b3c1685a735d14a!8m2!3d42.5966603!4d-83.7823297",
      "https://github.com/GDesk/co.gdesk.Setup",
      "https://www.bhmdiocese.org",
      "https://eepurl.com/h-czoP"
    ]
  }
  puts "Building site"
  system "bundle exec jekyll build"
  puts "Checking links in ./_site"
  HTMLProofer.check_directory("./_site", options).run
  puts "No link issues found"
end
