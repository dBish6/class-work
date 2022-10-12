CREATE OR REPLACE VIEW public."vw_custResentUpdates"
 AS
 SELECT customer.customer_id,
    (customer.first_name::text || ' '::text) || customer.last_name::text AS full_name,
    customer.last_update
   FROM customer
  WHERE customer.last_update > (CURRENT_DATE - '1 year'::interval);

ALTER TABLE public."vw_custResentUpdates"
    OWNER TO "dBish";
COMMENT ON VIEW public."vw_custResentUpdates"
    IS 'Displays the last_update from the last 12 months.';