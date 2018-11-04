name := """satan"""
organization := "satan.org"

version := "0.0.1"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.7"

libraryDependencies ++= Seq(
  guice,
  jdbc,
  evolutions,
  "joda-time" % "joda-time" % "2.9.9",
  "mysql" % "mysql-connector-java" % "8.0.12",
  "org.playframework.anorm" %% "anorm" % "2.6.2",
  "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
)
