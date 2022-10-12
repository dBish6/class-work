CREATE INDEX "Customer_FirstName_idx"
    ON public."Customer" USING btree
    ("Cust_FirstName" COLLATE pg_catalog."POSIX" varchar_pattern_ops ASC NULLS LAST)
;