INSERT INTO
    users(first_name, last_name, email, city)
VALUES
    (
        'Anakor',
        'Prozish',
        'anakor@example.com',
        'Lagos'
    ),
    (
        'Pamela',
        'Korish',
        'pamelakorish@example.com',
        'Lagos'
    ),
    (
        'Romania',
        'Kor',
        'southersmart@example.com',
        'Lagos'
    ),
    (
        'Southern',
        'Smart',
        '5K0Hq @example.com',
        'Lagos'
    ) ON CONFLICT (email) DO NOTHING;