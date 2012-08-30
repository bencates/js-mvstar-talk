require 'git'
require 'tmpdir'


desc "Build the website"
task :build do
  puts "## Building the website"
  system("middleman build --clean") or break
end

task :deploy => [:build] do
  puts "## Deploying to Github Pages"
  Dir.mktmpdir do |tmp|
    # clone ./ with branch gh-pages to tmp
    repo = Git.clone(Dir.pwd, tmp)
    repo.checkout('origin/gh-pages', :new_branch => 'gh-pages')

    # copy ./build/* to tmp
    FileUtils.cp_r(Dir.glob(File.join('build', '*')), tmp)

    # git add and commit in tmp
    repo.add
    repo.commit("Automated commit at #{Time.now.utc}")

    # push from tmp to self
    repo.push('origin', 'gh-pages')

    # push to github
    github_url = Git.open(Dir.pwd).remote.url
    repo.add_remote('github', github_url)
    repo.push('github', 'gh-pages')
  end
end
