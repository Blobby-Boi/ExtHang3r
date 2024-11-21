import urllib.parse

### Change these if you use different file names ###
index_file = "index.html"
output_file = "url.txt"

def main():
    with open(index_file) as index, open(output_file, "w") as output:
        # Read contents of index file
        index_string = index.read()

        # URL-encode file and add data prefix
        encoded_string = "data:text/html," + urllib.parse.quote(index_string)

        # Write URL to file and print to be copied
        output.write(encoded_string)
        print(encoded_string)

if __name__ == "__main__":
    main()