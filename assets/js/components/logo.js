import React from 'react';
import { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <section className="smoothlogo">
        <div className="smoothlogo__row">
          <div className='smoothlogo__row--letterbox'>
        		<svg className='smoothlogo__row--letter letter-s ' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
        			<use xlinkHref='#svg-S' />
        		</svg>
        	</div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-m' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-M' />
            </svg>
          </div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-o' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-O' />
            </svg>
          </div>
        </div>
        <div className="smoothlogo__row">
          <div className='smoothlogo__row--letterbox'>
        		<svg className='smoothlogo__row--letter letter-o2 ' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
        			<use xlinkHref='#svg-O' />
        		</svg>
        	</div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-t' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-T' />
            </svg>
          </div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-h' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-H' />
            </svg>
          </div>
        </div>
        <div className="smoothlogo__row">
          <div className='smoothlogo__row--letterbox'>
        		<svg className='smoothlogo__row--letter letter-i ' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
        			<use xlinkHref='#svg-I' />
        		</svg>
        	</div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-s2' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-S' />
            </svg>
          </div>
          <div className='smoothlogo__row--letterbox'>
            <svg className='smoothlogo__row--letter letter-m2' viewBox='0 0 63 113' preserveAspectRatio='xMinYMin meet'>
              <use xlinkHref='#svg-M' />
            </svg>
          </div>
        </div>
      </section>
    );
  }
}
