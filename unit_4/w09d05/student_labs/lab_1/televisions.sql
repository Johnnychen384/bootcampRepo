-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it


-- Create a televisions table
-- CREATE TABLE televisions(id serial, model_name varchar(30), screen_size varchar(30), resolution varchar(30), price decimal, release_date int, photo_url varchar(50))

--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url


-- Insert 4 televisions into the tv_models table
-- INSERT INTO televisions(model_name, screen_size, resolution, price, release_date, photo_url) VALUES ('something', '22 Inches', '1040p', 2000.00, 2022, 'www.somethingsomethingwow.com')

-- Select all entries from the tv_models table
-- SELECT * FROM televisions

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns

-- ALTER TABLE televisions DROP COLUMN resolution
-- ALTER TABLE televisions ADD COLUMN vertical_resolution varchar(30)
-- ALTER TABLE televisions ADD COLUMN horizontal_resolution varchar(30)