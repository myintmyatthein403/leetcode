SELECT name 
FROM Customer 
WHERE referee_id != 2 OR referee_id IS NULL;

/*  Option 2 */
select name from customer where referee_id != 2 is not false;
