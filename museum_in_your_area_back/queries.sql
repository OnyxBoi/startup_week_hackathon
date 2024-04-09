create table cities
(
    id        INTEGER
        primary key,
    city_name TEXT
        unique
);

create table contacts
(
    id    INTEGER
        primary key autoincrement,
    phone TEXT,
    url   TEXT
);

create table coordinates
(
    id          INTEGER
        primary key,
    coordinates TEXT
);

create table departments
(
    id              INTEGER
        primary key,
    department_name TEXT
        unique
);

create table details
(
    id         INTEGER
        primary key autoincrement,
    highlight  TEXT,
    themes     TEXT,
    artist     TEXT,
    key_figure TEXT,
    interest   TEXT
);

create table protections
(
    id               INTEGER
        primary key,
    space_protection TEXT
);

create table regions
(
    id   INTEGER
        primary key autoincrement,
    name TEXT
        unique
);

create table addresses
(
    id            INTEGER
        primary key,
    address       TEXT,
    postal_code   TEXT,
    region_id     INTEGER
        references regions,
    city_id       INTEGER
        references cities,
    department_id INTEGER
        references departments
);

create table thematic_domains
(
    id   INTEGER
        primary key,
    name TEXT
        unique
);

create table timestamps
(
    id            INT
        constraint timestamps_pk
            primary key,
    creation_year TEXT,
    update_date   TEXT
);

create table museums
(
    id             INTEGER
        primary key,
    identifier     TEXT,
    official_name  TEXT,
    history        TEXT,
    address_id     INTEGER
        references addresses,
    contact_id     INTEGER
        references contacts,
    details_id     INTEGER
        references details,
    protections_id INTEGER
        references protections,
    timestamp_id   INTEGER
        references timestamps,
    coordinates_id INTEGER
        references coordinates
);

create table museum_thematic_domains
(
    museum_id          INTEGER not null
        references museums,
    thematic_domain_id INTEGER not null
        references thematic_domains,
    primary key (museum_id, thematic_domain_id)
);

