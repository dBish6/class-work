SELECT actor_id, first_name, last_name, length(last_name) AS last_name_length
FROM public.actor

WHERE first_name LIKE 'B%' OR first_name LIKE 'Z%'

GROUP BY actor_id

ORDER BY last_name_length