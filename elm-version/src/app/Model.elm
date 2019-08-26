module Model exposing (Model, init)
import Message exposing (..)
---- Model.elm <-> state.ts ----


type alias Model =
    {
        foo: String
    }


init : ( Model, Cmd Msg )
init =
    ( {foo = "bar"}, Cmd.none )
