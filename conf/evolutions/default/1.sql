# --- !Ups

CREATE TABLE IF NOT EXISTS `users` (
	   `id` INTEGER NOT NULL AUTO_INCREMENT,
	   `username` VARCHAR(32) NOT NULL UNIQUE,
	   `email` VARCHAR(50) NOT NULL UNIQUE,
	   `uid` VARCHAR(50) NOT NULL UNIQUE,
   	   `password` VARCHAR(32) NOT NULL,
   	   `first_name` VARCHAR(50),
   	   `last_name` VARCHAR(50),
	   `avatar` VARCHAR(128) NULL,
	   `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	   `last_visited` DATETIME NULL,
	   `is_activated` BOOLEAN DEFAULT FALSE,
   	   `is_admin` BOOLEAN DEFAULT FALSE,
   	   PRIMARY KEY (`id`)
) ENGINE='InnoDB' DEFAULT CHARSET=utf8 COMMENT='Таблица учетных записпей пользователей';
CREATE INDEX `uid__users_idx` ON `users` (`uid`);
CREATE INDEX `email__users_idx` ON `users` (`email`);
CREATE INDEX `username__users_idx` ON `users` (`username`);

CREATE TABLE IF NOT EXISTS `permissions` (
	   `id` INTEGER NOT NULL AUTO_INCREMENT,
	   `title` ENUM('regular', 'moderator'),
	   `comment` VARCHAR(200) NOT NULL DEFAULT "",
   	   UNIQUE (`title`),
	   PRIMARY KEY (`id`)
) ENGINE='InnoDB' DEFAULT CHARSET=utf8 COMMENT='Таблица привилегий';

INSERT INTO
	   `permissions` (title, comment)
VALUES
       ('regular', "Обычный пользователь"),
       ('moderator', "Привилегированный пользователь");

CREATE TABLE IF NOT EXISTS `users_permissions` (
       `user_id` INTEGER NOT NULL,
	   `permission_id` INTEGER NOT NULL,
   	   FOREIGN KEY (`user_id`) REFERENCES users(`id`) ON DELETE NO ACTION,
   	   FOREIGN KEY (`permission_id`) REFERENCES permissions(`id`) ON DELETE NO ACTION
) ENGINE='InnoDB' DEFAULT CHARSET=utf8 COMMENT='Таблица привилегий пользователей';

CREATE TABLE IF NOT EXISTS `pages` (
	   `id` INTEGER NOT NULL AUTO_INCREMENT,
	   `title` VARCHAR(250) NOT NULL,
   	   `body` TEXT NOT NULL,
	   `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   	   `modified` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   	   `published` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   	   `is_public` BOOLEAN DEFAULT FALSE,
	   `user_id` INTEGER NOT NULL,
   	   FOREIGN KEY (`user_id`) REFERENCES users(`id`) ON DELETE CASCADE,
   	   PRIMARY KEY (`id`)
) ENGINE='InnoDB' DEFAULT CHARSET=utf8 COMMENT='Таблица станиц с произвольным содержанием';
CREATE INDEX `title__pages_idx` ON `pages` (`title`);

CREATE TABLE IF NOT EXISTS `stats` (
	   `id` INTEGER NOT NULL AUTO_INCREMENT,
	   `name` VARCHAR(32) NOT NULL,
   	   `value` INTEGER NOT NULL DEFAULT 0,
	   `dt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   	   PRIMARY KEY (`id`)
) ENGINE='InnoDB' DEFAULT CHARSET=utf8 COMMENT='Таблица статистики';
CREATE UNIQUE INDEX index_unique_on_a_and_b ON stats (`name`, `dt`);

# --- !Downs

DROP TABLE users;
DROP TABLE permissions;
DROP TABLE user_permissions;
DROP TABLE pages;
DROP TABLE stats;
