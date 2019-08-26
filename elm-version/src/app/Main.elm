module Main exposing (..)

import Browser
import Html exposing (Html, text, div, h1, img, p, button)
import Html.Attributes exposing (src, width)
import Html.Events exposing (onClick)
import Model exposing (..)
import Message exposing (..)
import Update exposing (..)



main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }


view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg", width 400 ] []
        , p [] [text model.foo]
        , button [onClick (Something "baz")] [text "Hello there from ELM, Click me!"]
        ]



