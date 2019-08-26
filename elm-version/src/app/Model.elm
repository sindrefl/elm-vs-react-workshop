module Model exposing (Model, init)
import Message exposing (..)
---- Model.elm <-> state.ts ----


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )
