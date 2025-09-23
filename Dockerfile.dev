# Use the official Ruby image as a base image
FROM ruby:3.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./
COPY minimal-mistakes-jekyll.gemspec ./

# Install gems
RUN bundle install

# Copy the rest of the application's code into the container
COPY . .

# Expose the port Jekyll will run on
EXPOSE 4000

# Command to run the Jekyll server
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
